
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectFolder } from '@/redux/retrieval/thunks';
import { Folder } from '@/redux/util_types';
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaRegFolder } from 'react-icons/fa'

const FolderRow = ({
    folder
}: {
    folder: Folder;
}) => {
    const url = usePathname();
  const dispatch = useAppDispatch();
  const retrieval = useAppSelector((state) => state.retrieval);

  const selectFolderData = () => {
    console.log(url)
    const accountType: string = url === "/retrieval" ? "queue" : url === "/home" ? "authorized" : "";
    dispatch(selectFolder({ folder, accountType }));
  };

  return (
    <div className="px-4 py-2 text-black font-joseph-sans text-[12px] sm:text-base">
        <div className={`flex font-joseph-sans cursor-pointer ${retrieval.selectedFolder.name == folder.name ? "text-[#00A2FF]" : ""} whitespace-nowrap`} onClick={e => selectFolderData()}>
            <FaRegFolder size={20} className={`text-center ${retrieval.selectedFolder.name == folder.name ? "text-[#00A2FF]" : "text-black"} mr-2`} />
            {folder.name}
          </div>
    </div>
  )
}

export default FolderRow