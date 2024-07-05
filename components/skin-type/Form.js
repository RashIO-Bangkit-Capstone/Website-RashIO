import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4 p-4">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Nama Lengkap</span>
        </div>
        <input
          type="text"
          placeholder="Masukkan Disini"
          className="input input-bordered w-full max-w-xs"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Umur</span>
        </div>
        <input
          type="text"
          placeholder="Masukkan Disini"
          className="input input-bordered w-full max-w-xs"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Jenis Kelamin</span>
        </div>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="input input-bordered w-full max-w-xs"
        >
          <option value="">Pilih Jenis Kelamin</option>
          <option value="male">Laki-Laki</option>
          <option value="female">Perempuan</option>
        </select>
      </label>
    </form>
  );
};

export default Form;
