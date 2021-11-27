import liStyles from "../../styles/Tag.module.css";
export default function Tag({ text }) {
  return (
    <div>
      <ul className={liStyles.ulElement}>
        <li className=" shadow-sm p-3 mb-5 bg-body rounded text-secondary h6">{text}</li>
        <li className=" shadow-sm p-3 mb-5 bg-body rounded text-secondary h6">{text}</li>
        <li className=" shadow-sm p-3 mb-5 bg-body rounded text-secondary h6">{text}</li>

      </ul>
    </div>
  );
}
