import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './scss/style.scss';
import Home from './pages/home';
import Nosotros from './pages/nosotros';
import Autismo from './pages/autismo';
import Servicios from './pages/servicios';
import Colabora from './pages/colabora';
import Filiales from './pages/filiales';
import Transparencia from './pages/transparencia';
import Contacto from './pages/contacto';
import NotFound from './pages/404';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route
          exact
          path="/nosotros/historia"
          render={() => <Nosotros title={'Historia'} url={'historia'} />}
        />
        <Route
          exact
          path="/nosotros/vision"
          render={() => <Nosotros title={'Visión'} url={'vision'} />}
        />
        <Route
          exact
          path="/nosotros/mision"
          render={() => <Nosotros title={'Misión'} url={'mision'} />}
        />
        <Route
          exact
          path="/nosotros/nuestro-equipo"
          render={() => <Nosotros title={'Nuestro Equipo'} url={'nuestro-equipo'} />}
        />

        <Route
          exact
          path="/autismo/definicion-transtorno-espectro-autista"
          render={() => (
            <Autismo
              title={'Definición Trastorno Espectro Autista'}
              url={'definicion-transtorno-espectro-autista'}
            />
          )}
        />
        <Route
          exact
          path="/autismo/etiologia"
          render={() => <Autismo title={'Etiología'} url={'etiologia'} />}
        />
        <Route
          exact
          path="/autismo/deteccion-y-diagnostico"
          render={() => (
            <Autismo title={'Detección y Diagnóstico'} url={'deteccion-y-diagnostico'} />
          )}
        />
        <Route
          exact
          path="/autismo/atencion-temprana"
          render={() => <Autismo title={'Atención Temprana'} url={'atencion-temprana'} />}
        />
        <Route
          exact
          path="/autismo/accesibilidad"
          render={() => <Autismo title={'Accesibilidad'} url={'accesibilidad'} />}
        />
        <Route
          exact
          path="/autismo/participacion-y-derechos"
          render={() => (
            <Autismo title={'Participación y Derechos'} url={'participacion-y-derechos'} />
          )}
        />
        <Route
          exact
          path="/autismo/educacion"
          render={() => <Autismo title={'Educación'} url={'educacion'} />}
        />
        <Route
          exact
          path="/autismo/comorbilidad"
          render={() => <Autismo title={'Comorbilidad'} url={'comorbilidad'} />}
        />
        <Route
          exact
          path="/autismo/intervencion"
          render={() => <Autismo title={'Intervención'} url={'intervencion'} />}
        />
        <Route
          exact
          path="/autismo/familias"
          render={() => <Autismo title={'Familias'} url={'familias'} />}
        />

        <Route
          exact
          path="/servicios/orientacion"
          render={() => <Servicios title={'Orientación'} url={'orientacion'} />}
        />
        <Route
          exact
          path="/servicios/deteccion-y-diagnostico"
          render={() => (
            <Servicios title={'Detección y Diagnóstico'} url={'deteccion-y-diagnostico'} />
          )}
        />
        <Route
          exact
          path="/servicios/atencion-temprana"
          render={() => <Servicios title={'Atención Temprana'} url={'atencion-temprana'} />}
        />
        <Route
          exact
          path="/servicios/saicon"
          render={() => <Servicios title={'Saicon'} url={'saicon'} />}
        />
        <Route
          exact
          path="/servicios/intervencion-terapeutica-individual"
          render={() => (
            <Servicios
              title={'Intervención Terapeútica Individual'}
              url={'intervencion-terapeutica-individual'}
            />
          )}
        />
        <Route
          exact
          path="/servicios/grupos-de-habilidades-sociales"
          render={() => (
            <Servicios
              title={'Grupos de Habilidades Sociales'}
              url={'grupos-de-habilidades-sociales'}
            />
          )}
        />
        <Route
          exact
          path="/servicios/aulas-terapeuticas-pedagogicas"
          render={() => (
            <Servicios
              title={'Aulas Terapéticas Pedagógicas'}
              url={'aulas-terapeuticas-pedagogicas'}
            />
          )}
        />
        <Route
          exact
          path="/servicios/apoyo-en-escuela"
          render={() => <Servicios title={'Apoyo en Escuela'} url={'apoyo-en-escuela'} />}
        />
        <Route
          exact
          path="/servicios/ocio-y-tiempo-libre"
          render={() => <Servicios title={'Ocio y Tiempo Libre'} url={'ocio-y-tiempo-libre'} />}
        />
        <Route
          exact
          path="/servicios/capacitaciones"
          render={() => <Servicios title={'Capacitaciones'} url={'capacitaciones'} />}
        />
        <Route
          exact
          path="/servicios/pasantias"
          render={() => <Servicios title={'Pasantías'} url={'pasantias'} />}
        />
        <Route
          exact
          path="/servicios/cuidador-de-personas-con-tea"
          render={() => (
            <Servicios
              title={'Cuidador de personas con TEA'}
              url={'cuidador-de-personas-con-tea'}
            />
          )}
        />
        <Route
          exact
          path="/servicios/terapia-a-familias"
          render={() => <Servicios title={'Terápia a Familias'} url={'terapia-a-familias'} />}
        />

        <Route
          exact
          path="/colabora/donaciones"
          render={() => <Colabora title={'Donaciones'} url={'donaciones'} />}
        />
        <Route
          exact
          path="/colabora/contrata-a-alguien-con-autismo"
          render={() => (
            <Colabora
              title={'Contrata a alguien con autismo'}
              url={'contrata-a-alguien-con-autismo'}
            />
          )}
        />
        <Route
          exact
          path="/colabora/servicios-con-descuento"
          render={() => (
            <Colabora title={'Servicios con descuento'} url={'servicios-con-descuento'} />
          )}
        />
        <Route
          exact
          path="/colabora/practicas-pre-profesionales"
          render={() => (
            <Colabora title={'Prácticas pre profesionales'} url={'practicas-pre-profesionales'} />
          )}
        />
        <Route
          exact
          path="/colabora/voluntariado"
          render={() => <Colabora title={'Voluntariado'} url={'voluntariado'} />}
        />
        <Route
          exact
          path="/colabora/estudios-para-personas-con-tea"
          render={() => (
            <Colabora
              title={'Estudios para personas con TEA'}
              url={'estudios-para-personas-con-tea'}
            />
          )}
        />

        <Route
          exact
          path="/filiales/tacna"
          render={() => <Filiales title={'Tacna'} url={'tacna'} />}
        />
        <Route exact path="/filiales/ilo" render={() => <Filiales title={'Ilo'} url={'ilo'} />} />
        <Route
          exact
          path="/filiales/arequipa"
          render={() => <Filiales title={'Arequipa'} url={'arequipa'} />}
        />

        <Route exact path="/transparencia" component={Transparencia} />
        <Route exact path="/contacto" component={Contacto} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
