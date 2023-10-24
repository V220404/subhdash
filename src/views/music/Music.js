import React from "react";

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle, hexToRgba } from "@coreui/utils";
import CIcon from "@coreui/icons-react";
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from "@coreui/icons";

import avatar1 from "src/assets/images/avatars/1.jpg";
import avatar2 from "src/assets/images/avatars/2.jpg";
import avatar3 from "src/assets/images/avatars/3.jpg";
import avatar4 from "src/assets/images/avatars/4.jpg";
import avatar5 from "src/assets/images/avatars/5.jpg";
import avatar6 from "src/assets/images/avatars/6.jpg";

import TickIcon from "src/assets/accept.png";
import CrossIcon from "src/assets/delete-button.png";
import TrashIcon from "src/assets/delete.png";

import WidgetsBrand from "../widgets/WidgetsBrand";
import WidgetsDropdown from "../widgets/WidgetsDropdown";
import axios from "axios";
import { useAuthContext } from "src/hooks/useAuthContext";

const Music = () => {
  const random = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const [users, setUsers] = React.useState([]);
  const { user } = useAuthContext();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isModal2Open, setIsModal2Open] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  async function getUsers() {
    await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/music/`, {
        headers: { Authorization: `Bearer ${user?.token}` },
      })
      .then((response) => {
        console.log(response.data.data);
        setUsers(response.data.data);
      });
  }

  const [addMusicData, setAddMusicData] = React.useState({
    name: "",
    genre: "",
    artist: "",
    file: "",
  });
  async function handleDelete() {
    setLoading(true);
    await axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/music/delete`,
        {
          id: users[deleteId]._id,
        },
        {
          headers: { Authorization: `Bearer ${user?.token}` },
        }
      )
      .then((response) => {
        console.log(response.data.data);
        alert("Music Deleted");
        setIsModalOpen(false);
        setDeleteId(null);
        setLoading(false);
        getUsers();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to delete music");
        setLoading(false);
      });
  }

  const handleAddMusicChange = (e) => {
    setAddMusicData({
      ...addMusicData,
      [e.target.name]:
        e.target.name == "file" ? e.target.files[0] : e.target.value,
    });
  };

  const handleAddMusic = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(addMusicData);
    const formData = new FormData();
    formData.append("name", addMusicData.name);
    formData.append("genre", addMusicData.genre);
    formData.append("artist", addMusicData.artist);
    formData.append("file", addMusicData.file, addMusicData.file.name);
    await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/music/create`, formData, {
        headers: { Authorization: `Bearer ${user?.token}` },
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.statusCode == 200) {
          alert("Music added successfully");
        } else {
          alert("Failed to add music");
        }
        setLoading(false);
        setIsModal2Open(false);
        setAddMusicData({
          name: "",
          genre: "",
          artist: "",
          file: "",
        });
        getUsers();
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to add music");
      });
  };
  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {/* <WidgetsDropdown /> */}
      {/* <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Traffic
              </h4>
              <div className="small text-medium-emphasis">
                January - July 2021
              </div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {["Day", "Month", "Year"].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === "Month"}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: "300px", marginTop: "40px" }}
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
              ],
              datasets: [
                {
                  label: "My First dataset",
                  backgroundColor: hexToRgba(getStyle("--cui-info"), 10),
                  borderColor: getStyle("--cui-info"),
                  pointHoverBackgroundColor: getStyle("--cui-info"),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                  fill: true,
                },
                {
                  label: "My Second dataset",
                  backgroundColor: "transparent",
                  borderColor: getStyle("--cui-success"),
                  pointHoverBackgroundColor: getStyle("--cui-success"),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                },
                {
                  label: "My Third dataset",
                  backgroundColor: "transparent",
                  borderColor: getStyle("--cui-danger"),
                  pointHoverBackgroundColor: getStyle("--cui-danger"),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress
                  thin
                  className="mt-2"
                  color={item.color}
                  value={item.percent}
                />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard> */}

      {/* <WidgetsBrand withCharts /> */}
      {isModalOpen && (
        <CModal
          visible={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          aria-labelledby="LiveDemoExampleLabel"
        >
          <CModalHeader onClose={() => setIsModalOpen(false)}>
            <CModalTitle id="LiveDemoExampleLabel">Delete Music?</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <p>
              Are you sure you want to delete the music {users[deleteId].name}{" "}
              by {users[deleteId].artist}?
            </p>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setIsModalOpen(false)}>
              Close
            </CButton>
            <CButton color="primary" onClick={handleDelete} disabled={loading}>
              {loading ? "Deleting..." : "Delete"}
            </CButton>
          </CModalFooter>
        </CModal>
      )}
      {isModal2Open && (
        <CModal
          visible={isModal2Open}
          onClose={() => setIsModal2Open(false)}
          aria-labelledby="LiveDemoExampleLabel"
        >
          <CModalHeader onClose={() => setIsModal2Open(false)}>
            <CModalTitle id="LiveDemoExampleLabel">Add Music</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormInput
              type="text"
              required
              name="name"
              id="exampleFormControlInput1"
              label="Music Name"
              placeholder="ABCD"
              value={addMusicData.name}
              aria-describedby="exampleFormControlInputHelpInline"
              style={{ marginBottom: "10px" }}
              onChange={handleAddMusicChange}
            />
            <CFormInput
              type="text"
              required
              name="genre"
              id="exampleFormControlInput2"
              label="Music Genre"
              placeholder="Pop"
              value={addMusicData.genre}
              aria-describedby="exampleFormControlInputHelpInline"
              style={{ marginBottom: "10px" }}
              onChange={handleAddMusicChange}
            />
            <CFormInput
              type="text"
              required
              name="artist"
              id="exampleFormControlInput3"
              label="Music Artist"
              value={addMusicData.artist}
              placeholder="John Doe"
              aria-describedby="exampleFormControlInputHelpInline"
              style={{ marginBottom: "10px" }}
              onChange={handleAddMusicChange}
            />
            <CFormInput
              type="file"
              required
              name="file"
              value={addMusicData.file}
              id="exampleFormControlInput3"
              label="Music File"
              accept="audio/mp3,audio/*;capture=microphone"
              placeholder="John Doe"
              aria-describedby="exampleFormControlInputHelpInline"
              style={{ marginBottom: "10px" }}
              onChange={handleAddMusicChange}
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setIsModal2Open(false)}>
              Close
            </CButton>
            <CButton
              color="primary"
              onClick={handleAddMusic}
              disabled={loading}
            >
              {loading ? "Adding..." : "Add"}
            </CButton>
          </CModalFooter>
        </CModal>
      )}
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>Music</div>
              <CButton onClick={() => setIsModal2Open(true)}>Add Music</CButton>
            </CCardHeader>
            <CCardBody>
              {/* <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">
                          New Clients
                        </div>
                        <div className="fs-5 fw-semibold">9,123</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">
                          Recurring Clients
                        </div>
                        <div className="fs-5 fw-semibold">22,643</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">
                          {item.title}
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">
                          Pageviews
                        </div>
                        <div className="fs-5 fw-semibold">78,623</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">
                          Organic
                        </div>
                        <div className="fs-5 fw-semibold">49,123</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}%
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{" "}
                          <span className="text-medium-emphasis small">
                            ({item.percent}%)
                          </span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))}
                </CCol>
              </CRow> */}

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    {/* <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell> */}
                    <CTableHeaderCell className="text-center">
                      Name
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Genre
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Artist
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Play
                    </CTableHeaderCell>
                    <CTableHeaderCell>Delete</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {users?.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell>
                        <div>{item.name}</div>
                        {/* <div className="small text-medium-emphasis">
                          <span>{item.username}</span> | {item.email}
                        </div> */}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.genre}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.artist}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <audio controls>
                          <source src={item.url} type="audio/mpeg" />
                        </audio>
                      </CTableDataCell>
                      <CTableDataCell>
                        <CAvatar
                          size="sm"
                          src={TrashIcon}
                          style={{
                            borderRadius: "0 !important",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setDeleteId(index);
                            setIsModalOpen(true);
                          }}
                        />{" "}
                        {/* <strong>{item.activity}</strong> */}
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Music;
