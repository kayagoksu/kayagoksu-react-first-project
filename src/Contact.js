import React from 'react';

const Contact = () => {
  return (
    <div id='contact'>
      <section className='bg'>
        <div className='p-5'>
          <h2 className='display-5 mb-5 text-center' style={{ color: "#2887c7" }}>CONTACT US</h2>

          <div className="container">

            <div className="row g-3 align-items-center mb-3">
              <div className="col-4 col-xl-3">
                <label htmlFor="exampleInputName1" className="col-form-label">Name
                  <span className='reqColor'> *</span>
                </label>
              </div>
              <div className="col-6">
                <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" required />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-4 col-xl-3">
                <label htmlFor="exampleInputEmail1" className="col-form-label">Email
                  <span className='reqColor'> *</span>
                </label>
              </div>
              <div className="col-6">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-4 col-xl-3">
                <label htmlFor="exampleInputText1" className="col-form-label">Message
                  <span className='reqColor'> *</span></label>
              </div>
              <div className="col-6 d-flex flex-column align-items-center">
                <textarea type="text" className="form-control mb-3" id="exampleInputText1" aria-describedby="textHelp" required></textarea>

              </div>
            </div>

            <div className="row g-3 align-items-center">
              <div className="col-4 col-xl-3"></div>
              <div className="col-6 d-grid">
                <button className="btn btn-outline rounded-0 text-uppercase mb-5" type="submit">
                  send message
                </button>
              </div>
            </div>

            <div className='col mt-3'>
              <table className='table table-borderless'>
                <tbody>

                  <tr>
                    <td colSpan={12}>
                      <span className="text-light">Lorem ipsum dolor, sit amet consectetur Ankara / Türkiye</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={12}>
                      <span className="text-light">+90 555 - 444 - 333 - 222 - 111</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className='row'>
                <div className='col-3'>
                  <table className='table table-borderless icon-color fs-5'>
                    <tbody>
                      <tr>
                        <td>
                          <i className='bi bi-facebook facebook'></i>
                        </td>
                        <td>
                          <i className='bi bi-twitter twitter'></i>
                        </td>
                        <td>
                          <i className='bi bi-youtube youtube'></i>
                        </td>
                        <td>
                          <i className='bi bi-github github'></i>
                        </td>
                        <td>
                          <i className='bi bi-medium medium'></i>
                        </td>
                        <td>
                          <i className='bi bi-reddit reddit'></i>
                        </td>

                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>




        </div>

      </section >
    </div >
  );
};

export default Contact;
