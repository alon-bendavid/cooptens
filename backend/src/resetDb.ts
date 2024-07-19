import db from "./db";
import Job from "./entities/Job";
// import Ad from "./entities/Ad";
// import Category from "./entities/Category";
// import Tag from "./entities/Tag";
import User, { UserRole } from "./entities/User";

export async function clearDB() {
  const runner = db.createQueryRunner();
  await runner.query("SET session_replication_role = 'replica'");
  await Promise.all(
    db.entityMetadatas.map(async (entity) =>
      runner.query(`ALTER TABLE "${entity.tableName}" DISABLE TRIGGER ALL`)
    )
  );
  await Promise.all(
    db.entityMetadatas.map(async (entity) =>
      runner.query(`DROP TABLE IF EXISTS "${entity.tableName}" CASCADE`)
    )
  );
  await runner.query("SET session_replication_role = 'origin'");
  await db.synchronize();
}

async function main() {
  await db.initialize();
  await clearDB();

  const admin = new User();
  Object.assign(admin, {
    nickname: "admin",
    email: "admin@app.com",
    password: "4dminAdmin@!",
    role: UserRole.Admin,
  });
  await admin.save();

  const user = new User();
  Object.assign(user, {
    nickname: "visitor",
    email: "visitor@app.com",
    password: "Visitor42@!",
  });
  await user.save();




  const job = new Job();
  Object.assign(job, {
    jobDescription: "its the best job ever!",
    jobTitle: "DÉVELOPPEUR FONCIER H/F",
    location: "Paris",
    active:true,
    mission:"work hard ,play strong ,fish the fish, eat the creat , neat!",
    profil:"someone not beit",
    salery:"1 000 000",
    jobType: "slavery",
  });
  await job.save();

}
main();
