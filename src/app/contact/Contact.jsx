import style from "../assets/style/contact.module.css";
export default function Contact() {
  return (
    <div className="flex items-center justify-center py-10">
      <form action="" className="border shadow-md flex flex-col p-4 max-w-2xl">
        <h2 className="text-3xl text-indigo-600 text-center">Contact Us</h2>
        <div className="flex my-3 max-w-full">
          <input
            className={style.input}
            type="text"
            placeholder="First Name"
            style={{ marginRight: "8px" }}
            required
          />
          <input
            className={style.input}
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
        <input
          className={style.input}
          type="email"
          placeholder="Email"
          required
        />
        <input
          className={style.input}
          type="number"
          placeholder="Phone"
          required
        />
        <textarea
          className={style.input}
          cols="30"
          rows="10"
          placeholder="Write your message"
        ></textarea>
        <button className="m-3 w-full h-10 bg-purple-500 hover:bg-purple-800 hover:text-white">
          Send Message
        </button>
      </form>
    </div>
  );
}
