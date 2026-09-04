import { Sequelize } from "sequelize";

export const sequelize=new Sequelize("eslam_","root","root",{
  host:"localhost",
  dialect:"mysql",
  pool:{
    max:4,
    min:0
  }
})


export const connectionDB=async(app,port)=>{
  try {
    await sequelize.authenticate();
    await sequelize.sync({alter:false});
    console.log("connect to db successfully 💯");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log("connection to DB fail ❌");
  }
}