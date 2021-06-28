CREATE TABLE [dbo].[PhoneBook] (
    [PhoneBookId]	INT             IDENTITY (1, 1) NOT NULL,
    [Name]			VARCHAR (200)   NOT NULL,
    CONSTRAINT [PK_PhoneBook] PRIMARY KEY CLUSTERED ([PhoneBookId] ASC),
    CONSTRAINT [UQ_PhoneBook_Name] UNIQUE NONCLUSTERED ([Name] ASC),
);
