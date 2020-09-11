import React from 'react';
import './styles.css'


const About = () => {
    return (
        <div className="about-container">
            <div className="about-section">
                <h2>SOBRE</h2>
                <p>Meu nome é Pietra, muito prazer!
                <br />Comecei meus estudos na área da saúde (enfermagem)
                <br />porém depois de um tempo me conhecendo melhor vi que não era oque realmente eu queria,
                <br />pesquisando bastante e depois de algum tempo criei gosto pela área da tecnologia
                <br />especificamente por desenvolvimento web, atualmente estou estudando
                  <br />buscando aprender muito mais e crescer nessa área que realmente me encontrei.
            </p>
            </div>
            <div class="content-right">
                <h2>SKILLS</h2>
                <div class="dev-skills">
                    <span>HTML •</span>
                    <span>CSS •</span>
                    <span>JAVASCRIPT •</span>
                    <span>REACT.JS</span>
                </div>
                <a className="link-curriculum" href="https://drive.google.com/file/d/1Qsc1QP4h8JkCLZmY5N1xjKOJcxrsbCqS/view?usp=sharing" target="_blank" rel="noopener noreferrer" >VEJA MEU CURRICULO</a>
            </div>
        </div>
    )
}

export default About;