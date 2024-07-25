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
    active: true,
    mission: "work hard ,play strong ,fish the fish, eat the creat , neat!",
    profil: "someone not beit",
    salary: "1 000 000",
    jobType: "slavery",
  });
  await job.save();

  const job01 = new Job();
  Object.assign(job01, {
    jobDescription: `Vous interviendrez sur les aspects administratifs, techniques et financiers des projets, tout en respectant une bonne gestion de projet et en prenant en compte la qualité, les coûts et les délais. Les opérations portent sur divers secteurs (santé, enseignement, administrations pénitentiaires, équipements sportifs, logements). 

Rattaché(e) au Directeur d’agence, vos missions seront les suivantes :

– Définition du besoin, étude de faisabilité,
– Programmation fonctionnelle et technique,
– Conduite d’opération/AMO/AMOT : 

Organisation concours, conception/réalisation, MGP
Suivi des études (APS, APD, PRO)
Désignation et suivi des prestataires intellectuels,
Suivi des travaux,
Gestion financière du projet,
Assistance à la phase de réception,
Suivi de la GPA.`,
    jobTitle: "CHEF DE PROJET AMO H/F – CONDUITE D’OPÉRATIONS",
    location: "MARSEILLE",
    active: true,
    mission: `Organisation concours, conception/réalisation, MGP
Suivi des études (APS, APD, PRO)
Désignation et suivi des prestataires intellectuels,
Suivi des travaux,
Gestion financière du projet,
Assistance à la phase de réception,
Suivi de la GPA. `,
    profil: `Ingénieur(e) bâtiment et/ou architecte diplômé(e), master en bâtiment, génie civil ou urbanisme avec une expérience minimale de 8 ans sur des opérations similaires. Vous justifiez d’une expérience professionnelle réussie démontrant votre intérêt pour des projets de construction complexes.

Vous vous reconnaissez à travers cette opportunité et souhaitez relever un nouveau challenge, envoyez-nous votre candidature !`,
    salary:
      "Rémunération fixe (à négocier selon profil) + RTT + Tickets restaurant + télétravail",
    jobType: "CDI",
  });
  await job01.save();

  const job02 = new Job();
  Object.assign(job02, {
    jobDescription: `Vous interviendrez sur les aspects administratifs, techniques et financiers des projets, tout en respectant une bonne gestion de projet et en prenant en compte la qualité, les coûts et les délais. Les opérations portent sur divers secteurs (santé, enseignement, administrations pénitentiaires, équipements sportifs, logements). 

Rattaché(e) au Directeur d’agence, vos missions seront les suivantes :

– Définition du besoin, étude de faisabilité,
– Programmation fonctionnelle et technique,
– Conduite d’opération/AMO/AMOT : 

Organisation concours, conception/réalisation, MGP
Suivi des études (APS, APD, PRO)
Désignation et suivi des prestataires intellectuels,
Suivi des travaux,
Gestion financière du projet,
Assistance à la phase de réception,
Suivi de la GPA.`,
    jobTitle: "CHEF DE PROJET AMO H/F – CONDUITE D’OPÉRATIONS",
    location: "MARSEILLE",
    active: true,
    mission: `Organisation concours, conception/réalisation, MGP
Suivi des études (APS, APD, PRO)
Désignation et suivi des prestataires intellectuels,
Suivi des travaux,
Gestion financière du projet,
Assistance à la phase de réception,
Suivi de la GPA. `,
    profil: `Ingénieur(e) bâtiment et/ou architecte diplômé(e), master en bâtiment, génie civil ou urbanisme avec une expérience minimale de 8 ans sur des opérations similaires. Vous justifiez d’une expérience professionnelle réussie démontrant votre intérêt pour des projets de construction complexes.

Vous vous reconnaissez à travers cette opportunité et souhaitez relever un nouveau challenge, envoyez-nous votre candidature !`,
    salary:
      "Rémunération fixe (à négocier selon profil) + RTT + Tickets restaurant + télétravail",
    jobType: "CDI",
  });
  await job02.save();

  const job03 = new Job();
  Object.assign(job03, {
    jobDescription: `Vous interviendrez sur les aspects administratifs, techniques et financiers des projets, tout en respectant une bonne gestion de projet et en prenant en compte la qualité, les coûts et les délais. Les opérations portent sur divers secteurs (santé, enseignement, administrations pénitentiaires, équipements sportifs, logements). 

Rattaché(e) au Directeur d’agence, vos missions seront les suivantes :

– Définition du besoin, étude de faisabilité,
– Programmation fonctionnelle et technique,
– Conduite d’opération/AMO/AMOT : 

Organisation concours, conception/réalisation, MGP
Suivi des études (APS, APD, PRO)
Désignation et suivi des prestataires intellectuels,
Suivi des travaux,
Gestion financière du projet,
Assistance à la phase de réception,
Suivi de la GPA.`,
    jobTitle: "CHEF DE PROJET AMO H/F – CONDUITE D’OPÉRATIONS",
    location: "MARSEILLE",
    active: true,
    mission: `Organisation concours, conception/réalisation, MGP
Suivi des études (APS, APD, PRO)
Désignation et suivi des prestataires intellectuels,
Suivi des travaux,
Gestion financière du projet,
Assistance à la phase de réception,
Suivi de la GPA. `,
    profil: `Ingénieur(e) bâtiment et/ou architecte diplômé(e), master en bâtiment, génie civil ou urbanisme avec une expérience minimale de 8 ans sur des opérations similaires. Vous justifiez d’une expérience professionnelle réussie démontrant votre intérêt pour des projets de construction complexes.

Vous vous reconnaissez à travers cette opportunité et souhaitez relever un nouveau challenge, envoyez-nous votre candidature !`,
    salary:
      "Rémunération fixe (à négocier selon profil) + RTT + Tickets restaurant + télétravail",
    jobType: "CDI",
  });
  await job03.save();
}
main();
