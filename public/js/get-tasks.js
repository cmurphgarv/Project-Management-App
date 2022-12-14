const allTaskData = async () => {
  const titleArray = [];
  const data = await fetch("http://localhost:3001/api/tasks");
  if (!data.ok) {
    console.log(error);
  }
  const jsonData = await data.json();
  console.log(jsonData);
};

allTaskData();
