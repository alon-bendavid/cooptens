import { test, expect } from "@playwright/test";
import { connect, disconnect } from "./dbHelpers";
import { clearDB } from "../../backend/src/db";

import User, { UserRole } from "../../backend/src/entities/User";
import Job from "../../backend/src/entities/Job";

test.beforeAll(connect);
test.beforeEach(clearDB);
test.afterAll(disconnect);

// test("can detact a component recived from db", async ({ page }) => {
//   // const job = new Job();
//   // Object.assign(job, {
//   //   jobDescription: "its the best job ever!",
//   //   jobTitle: "DÉVELOPPEUR FONCIER H/F",
//   //   location: "Paris",
//   //   active: true,
//   //   mission: "work hard ,play strong ,fish the fish, eat the creat , neat!",
//   //   profil: "someone not beit",
//   //   salary: "1 000 000",
//   //   jobType: "slavery",
//   // });
//   // await job.save();

//   await page.goto("/opportunities");

//   await page.waitForSelector('[data-testid="box"]');
//   const component = page.locator('[data-testid="box"]').nth(1);

//   await expect(component).toBeVisible();
// });

test("title test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "OPPORTUNITÉS" }).click();
  await expect(page.locator("h2")).toContainText("OPPORTUNITÉS");
});
