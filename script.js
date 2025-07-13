


let users = [
  { name: "Abhay", status: "Friend", image: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Karan", status: "Stranger", image: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Rohan", status: "Friend", image: "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Sita", status: "Stranger", image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8fDA%3D" },   
    { name: "Rahul", status: "Friend", image: "https://media.istockphoto.com/id/2165616608/photo/kannada-music-maestro.webp?a=1&b=1&s=612x612&w=0&k=20&c=fy2RiAUTJO96ToNNqvrw9HrHzOlSiXhbr_noHGIPGW0=" },    
    { name: "Anita", status: "Stranger", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW58ZW58MHx8MHx8fDA%3D" },
    { name: "Vikram", status: "Friend", image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww" },
    { name: "Neha", status: "Stranger", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWFufGVufDB8fDB8fHww" },
    { name: "Priya", status: "Friend", image: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFufGVufDB8fDB8fHww" },
    { name: "Pooja", status: "Stranger", image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWFufGVufDB8fDB8fHww" },
];
const container = document.querySelector(".cards");
  

Object.assign(container.style, {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
});

users.forEach(function (user) {
  let card = document.createElement("div");

  const styles = {
    width: "200px",
    padding: "20px",
    borderRadius: "5px",
    backgroundColor: "gray",
    alignItems: "center",
    display: "flex",
    
    flexDirection: "column",

  };
  Object.assign(card.style, styles);

let img = document.createElement("img");
img.src = user.image;  
Object.assign(img.style, {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "10px",
});


  let title = document.createElement("h1");
  title.textContent = user.name;

  let status = document.createElement("h4");
  status.textContent = user.status;

  let para = document.createElement("p");
  para.textContent =
  
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  let btn = document.createElement("button");
  btn.textContent =
    user.status === "Friend" ? "friend" : "Add Friend";

  Object.assign(btn.style, {
    backgroundColor: user.status === "Friend" ? "blue" : "red",
    color: "white",
    border: "none",
    width: "90px",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  });
card.appendChild(img);
  card.appendChild(title);
  card.appendChild(para);
  card.appendChild(status);
  card.appendChild(btn);

  container.appendChild(card);
});