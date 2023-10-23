describe('The Home Page', () => {

    beforeEach(  () =>{ cy.visit('http://localhost:3000/') // change URL to match your dev URL
    cy.get("[name=email]").type("superadmin");
    cy.get("[type=password]").type("admin123");
    cy.get('.mantine-qo1k2').click();
  })

/* CREATE_USER in dashboard */
    /* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
        it('New User add ', () => {

          cy.contains('Add User',{timeout:10000}).click();

          cy.get("[name=firstName]").type("parshant");
          cy.get("[name=lastName]").type("singh");
          cy.get("[name=username]").type('parshant123');
          cy.get("[type=password]").type('parshant@123');
          cy.get("[name=phone]").type('8947846442');
          cy.get("[name=email]").type('parshant123@gmail.com');
          cy.get("[rolesabc=abc]").click().type('{downArrow}{downArrow}{downArrow}{enter}');
         cy.get(".mantine-MultiSelect-searchInput").click().type('USER{enter}');
         cy.contains('Create User').click();
       })
      })