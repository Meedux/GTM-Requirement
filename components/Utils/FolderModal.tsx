import React from 'react'

const FolderModal = ({
    onSubmit,
    folderName,
    setFolderName,
    closeModal,
}: {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    folderName: string
    setFolderName: (folderName: string) => void
    closeModal: () => void
}) => {
  return (
    <dialog id="folder_modal" className="modal">
        <div className="modal-box bg-white">
            <form method="dialog" onSubmit={e => onSubmit(e)}>
                <h3 className="font-bold text-black font-joseph-sans text-lg">Create a Folder</h3>
                <div className="form-control">
                    <input
                        type="text"
                        className='input bg-[#E7F1FE] text-black'
                        placeholder="Folder Name"
                        value={folderName}
                        onChange={(e) => setFolderName(e.target.value)}
                    />
                </div>
                <div className="modal-action">
                    <button className="btn text-white font-joseph-sans" onClick={e => closeModal()}>Close</button>
                    <button className="btn text-white font-joseph-sans" type='submit'>Submit</button>
                </div>
            </form>
        </div>
    </dialog>
  )
}

export default FolderModal