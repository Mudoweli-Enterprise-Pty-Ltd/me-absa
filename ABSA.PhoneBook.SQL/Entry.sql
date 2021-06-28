CREATE TABLE [dbo].[Entry] (
    [EntryId]		INT             IDENTITY (1, 1) NOT NULL,
    [PhoneBookId]	INT				NOT NULL,
    [PhoneNumber]	VARCHAR (200)   NOT NULL,
    [EntryTypeId]	INT				NOT NULL,
    CONSTRAINT [PK_Entry] PRIMARY KEY CLUSTERED ([EntryId] ASC),
    CONSTRAINT [FK_Entry_PhoneBook] FOREIGN KEY ([PhoneBookId]) REFERENCES [dbo].[PhoneBook] ([PhoneBookId]),
    CONSTRAINT [FK_Entry_EntryType] FOREIGN KEY ([EntryTypeId]) REFERENCES [dbo].[EntryType] ([EntryTypeId])
);
