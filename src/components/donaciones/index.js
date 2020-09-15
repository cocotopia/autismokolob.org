import React, { useState } from 'react';
import './style.scss';

export default function Donaciones(props) {
  const [mount, setMount] = useState('50');
  const [mountCustom, setMountCustom] = useState('');
  const [showError, setShowError] = useState('');

  const getUrlPayment = () => {
    const SEND_MOUNT = mount || mountCustom;
    if (parseInt(mountCustom) <= 19) {
      setShowError('Lo sentimos el monto ingresado no esta permitido. El monto mínimo es de S/.20');
    } else {
      window.location.href = `/donaciones/?amount=${SEND_MOUNT}&product=${SEND_MOUNT}&label=Donación Autismo KOLOB`;
      // window.location.href = `http://127.0.0.1:8080/?amount=${SEND_MOUNT}&product=${SEND_MOUNT}&label=Donación Autismo KOLOB`;
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setShowError('');
    setMountCustom('');
    setMount(value);
  };

  return (
    <div className="site-section  bg-light">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="mb-5 text-black">¿Con cuánto quieres ayudar?</h2>

            {showError && <div className="cont-error">{showError}</div>}

            <div className="cont-items">
              <div className="btn-item">
                <input
                  id="item-20"
                  type="radio"
                  value="20"
                  checked={mount === '20'}
                  onChange={handleChange}
                />
                <label htmlFor="item-20">
                  <span>S/.</span>20
                </label>
              </div>
              <div className="btn-item">
                <input
                  id="item-50"
                  type="radio"
                  value="50"
                  checked={mount === '50'}
                  onChange={handleChange}
                />
                <label htmlFor="item-50">
                  <span>S/.</span>50
                </label>
              </div>
              <div className="btn-item">
                <input
                  id="item-100"
                  type="radio"
                  value="100"
                  checked={mount === '100'}
                  onChange={handleChange}
                />
                <label htmlFor="item-100">
                  <span>S/.</span>100
                </label>
              </div>
              <div className="input-item">
                <label>
                  Otro monto (S/.)
                  <input
                    type="number"
                    onChange={(e) => {
                      setMountCustom(e.target.value);
                      setMount(false);
                      setShowError('');
                    }}
                    value={mountCustom}
                  />
                </label>
              </div>
            </div>

            <p className="mb-0">
              <button
                type="button"
                onClick={getUrlPayment}
                className="btn btn-primary py-3 px-5 text-white"
              >
                Continuar
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
