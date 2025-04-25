import {test, expect} from '@playwright/test';


test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:5173/');
})

test.describe('Tests interfaces JupiterClock', () => {
    test.describe('Contrôle saisie de valeurs', () => {
        test('On ne peut pas dépasser la valeur 2 en saisie', async ({page}) => {
            await page.locator('.input-Moon').click();
            await page.locator('.input-Moon').press('ControlOrMeta+a');
            await page.locator('.input-Moon').fill('8');
            await expect(page.locator('.input-Moon')).toHaveValue('1');
        });

        test('On ne peut pas dépasser la valeur 2 avec le composant', async ({page}) => {
            await page.locator('.input-Moon').click();
            await page.locator('.input-Moon').press('ArrowUp');
            await page.locator('.input-Moon').press('ArrowUp');
            await page.locator('.input-Sun').click();
            await page.locator('.input-Sun').press('ArrowUp');
            await page.locator('.input-Sun').press('ArrowUp');
            await page.locator('.input-Earth').click();
            await page.locator('.input-Earth').press('ArrowUp');
            await page.locator('.input-Earth').press('ArrowUp');
            await expect(page.locator('.input-Moon')).toHaveValue('2');
            await expect(await page.locator('.input-Sun')).toHaveValue('2');
            await expect(await page.locator('.input-Earth')).toHaveValue('2');
        });
    })

    test.describe("État de base", () => {
        test('État de base', async ({page}) => {
            await expect(page.locator('.result-text')).toContainText('Heure : , Valeur : 0');
            await expect(page.locator('.input-Moon')).toHaveValue('1');
            await expect(await page.locator('.input-Sun')).toHaveValue('1');
            await expect(await page.locator('.input-Earth')).toHaveValue('1');
            await expect(page.locator('body')).toMatchAriaSnapshot(`
            - heading "Moon" [level=3]
            - spinbutton: "1"
            - heading "Sun" [level=3]
            - spinbutton: "1"
            - heading "Earth" [level=3]
            - spinbutton: "1"
            - button "Valider"
            - paragraph: "Heure : , Valeur : 0"
            `);
        });
    })

    test.describe('Changement valeur et calcul', () => {
        test('Quand un calcul est lancé les valeurs changent', async ({page}) => {
            await expect(page.locator('.result-text')).toContainText('Heure : , Valeur : 0');
            await page.locator('.input-Sun').click();
            await page.locator('.input-Sun').press('ArrowUp');
            await page.locator('.validateBtn').click();
            await expect(page.locator('.result-text')).toContainText('Heure : soirning, Valeur : 5');
        });
    })
})

