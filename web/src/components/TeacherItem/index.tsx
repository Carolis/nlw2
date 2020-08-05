import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://pbs.twimg.com/profile_images/1282336457647108097/teezq7_w_400x400.jpg"
          alt="Carolina Ale"
        />
        <div>
          <strong>Carolina Ale</strong>
          <span>Geladeirologia</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
        asperiores fuga quasi ratione nisi, dolore error dolorum ab, ea dolores
        velit veritatis obcaecati libero sint repudiandae aliquam aperiam eius
        similique.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>RS 800,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="zapzap" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
