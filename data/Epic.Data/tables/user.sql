﻿CREATE TABLE [dbo].[User]
(
	[Id] BIGINT NOT NULL ,
	Name VARCHAR(200),
	LastName VARCHAR(200),
	Email VARCHAR(200) NOT NULL,
	Password VARCHAR(500) NOT NULL,
	CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED ([Id] ASC)
)
