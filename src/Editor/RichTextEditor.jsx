import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

const RichTextEditor = ({ value, onChange }) => {
  const handleChange = (content) => {
    onChange(content);
  };

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={handleChange}
      modules={RichTextEditor.modules}
      formats={RichTextEditor.formats}
      placeholder="Give a description of..."
      className='h-44'
    />
  );
};

RichTextEditor.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ color: [] }, { background: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    ['clean'],
  ],
};

RichTextEditor.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'color',
  'background',
  'list',
  'bullet',
  'link',
  'image',
];

export default RichTextEditor;
