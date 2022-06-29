import React from "react";
import './about.css'
export default function About() {
  return (
    <div className="about_section">
      <div className="container row">
        <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 p-0">
            <img src="./img/Zufarbek_profil.jpg" alt="Zufarbek_profil" />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <h2>Zufarbek abdurahkmonov</h2>
            <p>Mobil , Veb dasturchi , O'qituvchi</p>
            <div className="row">
                <div className="col-12">
                    <p>Men Haqimda</p>
                  <table>
                    <tr>
                        <th>Ismim</th>
                        <td>Zufarbek Abdurakmonov</td>
                    </tr>
                    <tr>
                        <th>Tug'ilgan Sana</th>
                        <td>09.11.1998</td>
                    </tr>
                    <tr>
                        <th>O'qigan joyi</th>
                        <td>125-maktab</td>
                    </tr>
                    <tr>
                        <th>O'qigan Universiteti</th>
                        <td>Toshkent Axborot texnologiyalari Universiteti</td>
                    </tr>
                    <tr>
                        <th>Ishlagan Joylari</th>
                    </tr>
                  </table>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
