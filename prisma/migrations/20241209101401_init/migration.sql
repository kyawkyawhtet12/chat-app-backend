/*
  Warnings:

  - You are about to drop the `_UserChatRooms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_UserChatRooms` DROP FOREIGN KEY `_UserChatRooms_A_fkey`;

-- DropForeignKey
ALTER TABLE `_UserChatRooms` DROP FOREIGN KEY `_UserChatRooms_B_fkey`;

-- DropTable
DROP TABLE `_UserChatRooms`;

-- CreateTable
CREATE TABLE `ChatRoomUser` (
    `userId` INTEGER NOT NULL,
    `chatRoomId` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `assignedBy` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userId`, `chatRoomId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ChatRoomUser` ADD CONSTRAINT `ChatRoomUser_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatRoomUser` ADD CONSTRAINT `ChatRoomUser_chatRoomId_fkey` FOREIGN KEY (`chatRoomId`) REFERENCES `ChatRoom`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
