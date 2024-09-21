import React from 'react';
import useFormInput from './hooks/useFormInput';

const App = () => {
  const name = useFormInput('');
  const email = useFormInput('');
  const age =useFormInput('');
  const place =useFormInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name.value}\nEmail: ${email.value}\nAge: ${age.value}\nPlace: ${place.value}`);
  };
  return (
    <div style={{ margin: '20px' }}>
      <h1>Form with Custom Hook</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" {...name} />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" {...email} />
        </div>
        <div>
          <label>Age: </label>
          <input type="age" {...age} />
        </div>
        <div>
          <label>Place: </label>
          <input type="place" {...place} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default App;

