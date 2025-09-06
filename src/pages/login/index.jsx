import React from "react";
import MetaLogo from "../../assets/Meta-Logo.png";
import { useGetValues } from "../../hooks/useGetValues";

const Login = () => {
  const { formData, handleChange } = useGetValues({
    firstName: "",
    lastName: "",
    day: "",
    month: "",
    year: "",
    gender: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form values:", formData); 
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen py-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 grid gap-4"
      >
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="text-xl font-bold text-gray-600 hover:text-gray-900"
          >
            {"<"}
          </button>
          <img src={MetaLogo} alt="Meta Logo" className="w-20" />
        </div>

        <h2 className="font-semibold text-2xl">
          Начните пользоваться Facebook
        </h2>

        <div className="grid grid-cols-2 gap-2">
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Имя"
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Фамилия"
          />
        </div>

        <label className="font-medium text-sm">Дата рождения</label>
        <div className="grid grid-cols-3 gap-2">
          <select
            name="day"
            value={formData.day}
            onChange={handleChange}
            className="border rounded-lg px-2 py-2"
          >
            <option value="">День</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <select
            name="month"
            value={formData.month}
            onChange={handleChange}
            className="border rounded-lg px-2 py-2"
          >
            <option value="">Месяц</option>
            <option value="Январь">Январь</option>
            <option value="Февраль">Февраль</option>
          </select>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="border rounded-lg px-2 py-2"
          >
            <option value="">Год</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
          </select>
        </div>

        <label className="font-medium text-sm">Пол</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border rounded-lg px-2 py-2"
        >
          <option value="">Выберите</option>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>

        <label className="font-medium text-sm">
          Мобильный телефон или эл. адрес
        </label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Ваш телефон или email"
        />

        <label className="font-medium text-sm">Пароль</label>
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="Введите пароль"
        />

        <div className="grid gap-2 mt-3">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
          >
            Отправить
          </button>
          <button
            type="button"
            className="bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200"
          >
            У меня уже есть аккаунт
          </button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(Login);
