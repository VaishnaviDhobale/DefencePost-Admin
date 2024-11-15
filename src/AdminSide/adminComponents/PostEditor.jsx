// import React, { useState, useRef } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// const PostEditor = ({ onTextareaChange }) => {
//   const [content, setContent] = useState('');
//   const quillRef = useRef(null);

//   const handleContentChange = (value) => {
//     setContent(value);
//     onTextareaChange("content", value);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       // Insert a new line on Enter key
//       const quill = quillRef.current.getEditor();
//       const cursorPosition = quill.getSelection().index;
//       quill.insertText(cursorPosition, '\n');
//       quill.setSelection(cursorPosition + 1);
//       event.preventDefault();
//     } else if (event.key === 'Tab') {
//       // Insert four spaces on Tab key
//       const quill = quillRef.current.getEditor();
//       const cursorPosition = quill.getSelection().index;
//       quill.insertText(cursorPosition, '    ');
//       quill.setSelection(cursorPosition + 4);
//       event.preventDefault();
//     }
//   };

//   return (
//     <div>
//       <ReactQuill
//         theme="snow"
//         value={content}
//         onChange={handleContentChange}
//         onKeyDown={handleKeyDown}
//         modules={{
//           toolbar: [
//             [{ 'header': [1, 2, 3, false] }],
//             ['bold', 'italic', 'underline', 'strike'],
//             [{ 'color': [] }, { 'background': [] }],
//             [{ 'align': [] }],
//             ['link', 'image'],
//             ['clean']
//           ]
//         }}
//         ref={quillRef}
//       />
//     </div>
//   );
// };

// export default PostEditor;





import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PostEditor = ({ onTextareaChange}) => {
  const [content, setContent] = useState('');
  const quillRef = useRef(null);

  const handleContentChange = (value) => {
    setContent(value);
    onTextareaChange('content', value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Insert a new line on Enter key
      const quill = quillRef.current.getEditor();
      const cursorPosition = quill.getSelection().index;
      quill.insertText(cursorPosition, '\n');
      quill.setSelection(cursorPosition + 1);
      event.preventDefault();
    } else if (event.key === 'Tab') {
      // Insert four spaces on Tab key
      const quill = quillRef.current.getEditor();
      const cursorPosition = quill.getSelection().index;
      quill.insertText(cursorPosition, '    ');
      quill.setSelection(cursorPosition + 4);
      event.preventDefault();
    }
  };

  return (
    <div style={{marginBottom : "40px"}}>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={handleContentChange}
        onKeyDown={handleKeyDown}
        modules={{
          toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['link', 'image'],
            ['list', 'bullet'],
            ['clean']
          ]
        }}
        ref={quillRef}
      />
    </div>
  );
};

export default PostEditor;
