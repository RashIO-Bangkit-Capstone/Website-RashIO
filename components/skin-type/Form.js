import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
  });

  const [errors, setErrors] = useState({
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
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clearing errors when input changes
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4 p-4">
      <label
        htmlFor="name"
        className="form-control w-full max-w-xs input-lg w-full"
      >
        <span className="label-text">Nama Lengkap</span>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Masukkan Disini"
          className="input input-bordered w-full"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name}</span>
        )}
      </label>

      <label
        htmlFor="age"
        className="form-control w-full max-w-xs input-lg w-full"
      >
        <span className="label-text">Umur</span>
        <input
          type="text"
          id="age"
          name="age"
          placeholder="Masukkan Disini"
          className="input input-bordered w-full"
          value={formData.age}
          onChange={handleChange}
        />
      </label>

      <label
        htmlFor="gender"
        className="form-control w-full max-w-xs input-lg w-full"
      >
        <span className="label-text">Jenis Kelamin</span>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="input input-bordered w-full"
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
