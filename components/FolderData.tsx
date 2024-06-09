"use client";
import React, { FormEvent, useEffect, useState } from "react";
import FolderTableRow from "./TableRow/FolderTableRow";
import { usePathname } from "next/navigation";
import { Folder } from "@/redux/util_types";
import {
  fetchFolders,
} from "@/redux/retrieval/thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import FolderModal from "./Utils/FolderModal";

  

const FolderData = () => {
  const url = usePathname();
  const dispatch = useAppDispatch();
  const retrieval = useAppSelector((state) => state.retrieval);
  const user = useAppSelector((state) => state.user);


  const [folders, setFolders] = useState<Folder[]>([]);
  const [folderName, setFolderName] = useState<string>("");

  const createFolder = async (e: FormEvent) => {
    e.preventDefault();

    const folder = {
      name: folderName,
      username: user.username,
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/folder/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(folder),
      });

      if (response.ok) {
        console.log("Folder created successfully");
        await dispatch(fetchFolders());
        closeModal();
      } else {
        console.error("Failed to create folder");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  }

  const showModal = () => {
    const folderModal = document.getElementById('folder_modal') as HTMLDialogElement;
    folderModal.showModal();
  }

  const closeModal = () => {
    const folderModal = document.getElementById('folder_modal') as HTMLDialogElement;
    folderModal.close();
  }

  useEffect(() => {
    Promise.resolve(dispatch(fetchFolders()))
  }, [retrieval.selectedFolder, retrieval.accountQueue]);

  useEffect(() => {
    setFolders(retrieval.folders);
  }, [retrieval.folders]);

  return (
    <div className="">
      <div className="flex flex-row justify-between items-center">
        <div className="">
          <button className="bg-black mb-1 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-[12px] sm:text-base" onClick={(e) => showModal()}>
            Create Folder
          </button>
        </div>
      </div>
      <div className="border border-gray-300 rounded-md shadow-lg card w-full h-[90%]">
        <table className="w-full">
          <thead className="">
            <tr className="border-b border-gray-300 bg-[#F4F4F5]">
              <th className="px-4 py-2 text-[12px] sm:text-base text-start text-black font-bold font-joseph-sans">
                Select Folder Location
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              folders.map((folder: Folder) => (
                <FolderTableRow
                    key={folder.name}
                    folder={folder}
                />
              ))
            }
          </tbody>
        </table>
      </div>

      <FolderModal
        onSubmit={createFolder}
        folderName={folderName}
        setFolderName={setFolderName}
        closeModal={closeModal}
      />
    </div>
  );
};

export default FolderData;
