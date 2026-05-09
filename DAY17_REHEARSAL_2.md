Issue found:

Users API initially showed 24 records because the seeder was still inserting data.



Fix:

Waited for backend seeding to complete. Re-tested users API and confirmed seeded user count is 30.

