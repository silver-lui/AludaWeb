import React, { useState } from 'react';
import '../Style/Admin-Style.css';

function Admin() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [page, setPage] = useState('მთავარი');
  const [isPoll, setIsPoll] = useState(false);
  const [pollOptions, setPollOptions] = useState(['', '']);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);
    formData.append('page', page);
    formData.append('isPoll', isPoll);
    formData.append('pollOptions', JSON.stringify(pollOptions.filter(option => option.trim() !== '')));

    // Here you would typically send the formData to your backend
    console.log('Form data:', Object.fromEntries(formData));
    // Reset form after submission
    setTitle('');
    setContent('');
    setImage(null);
    setPage('მთავარი');
    setIsPoll(false);
    setPollOptions(['', '']);
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleAddPollOption = () => {
    setPollOptions([...pollOptions, '']);
  };

  const handlePollOptionChange = (index, value) => {
    const newOptions = [...pollOptions];
    newOptions[index] = value;
    setPollOptions(newOptions);
  };

  const handleRemovePollOption = (index) => {
    const newOptions = pollOptions.filter((_, i) => i !== index);
    setPollOptions(newOptions);
  };

  return (
    <div className="admin-page">
      <h1>ახალი პოსტის დამატება</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">სათაური:</label>
          <input
            className="input"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">შინაარსი:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">სურათი:</label>
          <input
            className="input"
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="page">გვერდი:</label>
          <select
            id="page"
            value={page}
            onChange={(e) => setPage(e.target.value)}
          >
            <option value="მთავარი">მთავარი</option>
            <option value="პროფილი">პროფილი</option>
            <option value="აქტივობები">აქტივობები</option>
            <option value="თემები">თემები</option>
            <option value="ბლოგი">ბლოგი</option>
            <option value="ისტორიები">ისტორიები</option>
          </select>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={isPoll}
              onChange={(e) => setIsPoll(e.target.checked)}
            />
            არის გამოკითხვა?
          </label>
        </div>

        {isPoll && (
          <div className="poll-options">
            <h3>გამოკითხვის ვარიანტები:</h3>
            {pollOptions.map((option, index) => (
              <div key={index} className="poll-option">
                <input
                  className="input"
                  type="text"
                  value={option}
                  onChange={(e) => handlePollOptionChange(index, e.target.value)}
                  placeholder={`ვარიანტი ${index + 1}`}
                />
                {index > 1 && (
                  <button type="button" onClick={() => handleRemovePollOption(index)}>
                    წაშლა
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={handleAddPollOption}>
              ვარიანტის დამატება
            </button>
          </div>
        )}

        <button type="submit" className="submit-button">პოსტის დამატება</button>
      </form>
    </div>
  );
}

export default Admin;