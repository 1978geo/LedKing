-- DropForeignKey
ALTER TABLE "Billboard" DROP CONSTRAINT "Billboard_cityId_fkey";

-- AddForeignKey
ALTER TABLE "Billboard" ADD CONSTRAINT "Billboard_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;
