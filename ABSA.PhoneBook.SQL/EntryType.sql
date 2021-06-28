CREATE TABLE [dbo].[EntryType] (
    [EntryTypeId]	INT             NOT NULL,
    [Code]          VARCHAR (50)    NOT NULL,
    [Name]          VARCHAR (200)   NOT NULL,
    CONSTRAINT [PK_EntryType] PRIMARY KEY CLUSTERED ([EntryTypeId] ASC),
    CONSTRAINT [UQ_EntryType_Name] UNIQUE NONCLUSTERED ([Name] ASC),
);
