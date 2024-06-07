describe('template spec', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('Правильный логин и пароль', () => {
        cy.login('bropet@mail.ru', '123');
        cy.contains('Добро пожаловать').should('be.visible');
    });
    it('empty password', () => {
        cy.login('bropet@mail.ru', null);
        cy.get('#pass').then((elements) => {
            expect(elements[0].checkValidity()).to.be.false;
        });
    });
    it('empty login', () => {
        cy.login(null, '123');
        cy.get('#mail').then((elements) => {
            expect(elements[0].checkValidity()).to.be.false;
            expect(elements[0].validationMessage).to.be.eql(
                'Заполните это поле.'
            );
        });
    });

    it('добавление в избранное сразу', () => {
        cy.login('bropet@mail.ru', '123');
        cy.bookName('Dracula', 'Bram Stoker');
        cy.get('#favorite').click();
        cy.get("button[type='submit']").click();
        cy.get('h4').click();
        cy.contains('Dracula').should('be.visible');
    });
    it('добавление в избранное после', () => {
        cy.login('bropet@mail.ru', '123');
        cy.bookName('Emma', 'Jane Austen');
        cy.get("button[type='submit']").click();
        cy.get(
            '[href="book/11cda468-bb8f-4638-86c0-0bf3c89f2340"] > .h-100 > .card-footer > .btn'
        ).click();
        cy.get('h4').click();
        cy.contains('Emma').should('be.visible');
    });
    it('загрузка книги', () => {
        cy.login('bropet@mail.ru', '123');
        cy.get('h4').click();
        cy.get(
            '[href="book/560c4d59-25eb-4a24-b587-c03f0829f2ef"] > .h-100 > .card-body'
        ).click();
        cy.contains('Dowload book').should('be.visible');
    });
});
