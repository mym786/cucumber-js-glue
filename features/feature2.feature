Feature: I want to be able to add documents to the system.
  @important
  Scenario: Adding a new document to the system
    Given A web API that takes document as payload
    And the user is logged in
    When the document is uploaded
    Then store the document on the file system
    And store document properties (FileName, FileSize, Uploaded By, Date of upload) in db
    And return a success response of 200 and a success message

  Scenario: Adding a new document as payload and the user is not logged In
    Given A web API that takes document as payload
    And the user is not logged in
    When the document is uploaded
    Then return an error code of 405 and a message that user is not authorized

  Scenario: When we are uploading a document to the system, we need to ensure the properties
    of the document are the following File Name, File Size, Upload Date, User, Document Type
    Given A function that takes a document
    And the user is logged In
    When the document is given to function
    Then ensure the extracted properties are File Name, File Size, Uploaded Date, Uploaded User, Document Type

  Scenario: Adding a new document to the system and the file name has been provided
    Given A web API that takes a document as payload
    And the user is logged In
    And a file name has been provided by the user
    When the document is uploaded
    Then store the document on the file system
    And use the file name provided by the user instead of document name
    And store document properties (FileName, FileSize, Uploaded By, Date of upload)
    And return a success response of 200 and a success message

  Scenario: Adding a new document to the system and tags are provided
    Given A web API that takes a document as payload
    And the user is logged In
    When the document is uploaded
    Then store document on the file system
    And store document properties (FileName, FileSize, Uploaded By, Date of upload)
    And store tags of the system
    And return a success response of 200 and a success message
