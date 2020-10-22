/**
 * Merges two FileList objects and returns a new FileList object
 * @param fileListA The first FileList object
 * @param fileListB The second FileList object
 */
const mergeFileLists = (fileListA: FileList, fileListB: FileList): FileList => {
  const dataTransfer = new DataTransfer();
  
  for (let i = 0; i < fileListA.length; i++) {
    dataTransfer.items.add(fileListA[i]);
  }
  
  for (let i = 0; i < fileListB.length; i++) {
    dataTransfer.items.add(fileListB[i]);
  }

  return dataTransfer.files;
}

export default mergeFileLists;