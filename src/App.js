import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getDataCsv } from './helpers/commonFunctions';

function App() {
  const [students, setStudents] = useState([]);
  const [studentSelected, setStudentSelected] = useState([]);
  useEffect(() => {
    getDataCsv('./resources/K19-Result.csv').then(
      (results) => {
        setStudents(results.slice(0, 10))
      }
    )
  }, [])
  const renderStudents = () => {
    return students.map((student, index) => {
      return (
        <tr>
          <td scope="row">{index + 1}
            <button type="button" class="btn btn-primary" onClick={() => setStudentSelected(student)}>Hehe</button>
          </td>
          <td>{student.MSSV}</td>
          <td>{student.HoVaTen}</td>
          <td>{student.Lop}</td>
          <td>{student.SoDienThoai}</td>
          <td>{student.TinChi}</td>
          <td>{student.TrungBinhChung}</td>
          <td>{student.TrungBinhTichLuy}</td>
          <td>{student.XepLoai}</td>
          <td>{student.TinhTrang}</td>
        </tr>
      )
    })
  }
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                </p><div className="form-group mb-2">
                  <h5 htmlFor>MSSV</h5>
                  <input type="text" className="form-control form-control-sm form-control-muted" name id aria-describedby="helpId" placeholder value={studentSelected.MSSV} />
                </div>
                <div className="form-group mb-2">
                  <h5 htmlFor>Ho Va Ten</h5>
                  <input type="text" className="form-control form-control-sm form-control-muted" name id aria-describedby="helpId" placeholder value={studentSelected.HoVaTen} />
                </div>
                <div className="form-group mb-2">
                  <h5 htmlFor>Lop</h5>
                  <input type="text" className="form-control form-control-sm form-control-muted" name id aria-describedby="helpId" placeholder value={studentSelected.Lop} />
                </div>
                <div className="form-group mb-2">
                  <h5 htmlFor>SDT</h5>
                  <input type="text" className="form-control form-control-sm form-control-muted" name id aria-describedby="helpId" placeholder value={studentSelected.SoDienThoai} />
                </div>
                <div className="form-group mb-2">
                  <h5 htmlFor>Tin chi</h5>
                  <input type="text" className="form-control form-control-sm form-control-muted" name id aria-describedby="helpId" placeholder value={studentSelected.TinChi} />
                </div>
                <div className="form-group mb-2">
                  <h5 htmlFor>TBC</h5>
                  <input type="text" className="form-control form-control-sm form-control-muted" name id aria-describedby="helpId" placeholder value={studentSelected.TrungBinhChung} />
                </div>
                <div className="form-group mb-2">
                  <h5 htmlFor>TBTL</h5>
                  <input type="text" className="form-control form-control-sm form-control-muted" name id aria-describedby="helpId" placeholder value={studentSelected.TrungBinhTichLuy} />
                </div>
                <div className="form-group mb-2">
                  <h5 htmlFor>Tinh Trang</h5>
                  <input type="text" className="form-control form-control-sm form-control-muted" name id aria-describedby="helpId" placeholder value={studentSelected.TinhTrang} />
                </div>
                <div className="form-group mb-2">
                  <h5 htmlFor>Xep Loai</h5>
                  <input type="text" className="form-control form-control-sm form-control-muted" name id aria-describedby="helpId" placeholder value={studentSelected.XepLoai} />
                </div>
                <p />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <table className="table table-striped table-inverse table-responsive">
              <thead className="thead-inverse">
                <tr>
                  <th>STT</th>
                  <th>MSSV</th>
                  <th>Ten</th>
                  <th>Lop</th>
                  <th>SDT</th>
                  <th>Tin Chi</th>
                  <th>TB Chung</th>
                  <th>TB TL</th>
                  <th>Xep Loai</th>
                  <th>Tinh Trang</th>
                </tr>
              </thead>
              <tbody>
                {renderStudents()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
