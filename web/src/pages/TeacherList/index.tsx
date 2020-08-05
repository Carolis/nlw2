import React from "react";
import PageHeader from "../../components/PageHeader";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            <br /> Dicta asperiores fuga quasi ratione nisi, dolore error
            dolorum ab, ea dolores velit veritatis obcaecati libero sint
            repudiandae aliquam aperiam eius similique.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>RS 800,00</strong>
              <button type="button">
                <img src={whatsappIcon} alt="zapzap" />
                Entrar em contato
              </button>
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default TeacherList;
