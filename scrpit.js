       const fileInput = document.querySelector('#file');
        const fileLabel = document.querySelector('#file-label');
      
        
        // Add drag-and-drop support
        fileLabel.addEventListener('dragover', (event) => {
          event.preventDefault();
          fileLabel.classList.add('dragover');
        });
      
        fileLabel.addEventListener('dragleave', (event) => {
          event.preventDefault();
          fileLabel.classList.remove('dragover');
        });
      
        fileLabel.addEventListener('drop', (event) => {
          event.preventDefault();
          fileLabel.classList.remove('dragover');
          fileInput.files = event.dataTransfer.files;
        });
        fileInput.addEventListener('change', function() {
            if (fileInput.files.length === 0) {
              fileLabel.querySelector('.text').innerHTML = 'Drag and drop files here or click to select files';
            } else if (fileInput.files.length === 1) {
              fileLabel.querySelector('.text').innerHTML = `Selected file: ${fileInput.files[0].name}`;
            } else {
              fileLabel.querySelector('.text').innerHTML = `Selected ${fileInput.files.length} files`;
            }
          });
        
        fileInput.addEventListener('change', (event) => {
    const maxFiles = 20; // Set the maximum number of files here
    if (fileInput.files.length > maxFiles) {
      alert(`You can only upload up to ${maxFiles} files.`);
      event.preventDefault();
    }
  });