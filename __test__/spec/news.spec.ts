import { test, expect } from '@playwright/test'


test.describe('NewsApp spec', () => {

  test('should have home page', async ({
    page,
  }) => {
      await page.goto('/')
      await expect(page).toHaveTitle(/Home — News/)
      const metadescription = await page.locator('meta[name="description"]');
      await expect(metadescription).toHaveAttribute(
        'content','Home news on deman trending'
      );
  }),

  test('should have post page', async ({
    page,
  }) => {
    await page.goto('/posts/entertainment')
    await expect(page).toHaveTitle(/news on category entertainment/)
    const metadescription = await page.locator('meta[name="description"]');
    await expect(metadescription).toHaveAttribute(
      'content','news on category entertainment'
    );
  })

  test('should have search result page', async ({
    page,
  }) => {
    await page.goto('/news/basket')
    await expect(page).toHaveTitle(/Search keyword : basket/)
    const metadescription = await page.locator('meta[name="description"]');
    await expect(metadescription).toHaveAttribute(
      'content','Search keyword : basket'
    );
  })

  test('should have detail page', async ({
    page,
  }) => {
    await page.goto('/detail')
    await expect(page).toHaveTitle(/404 Not Found/)
    const metadescription = await page.locator('meta[name="description"]');
    await expect(metadescription).toHaveAttribute(
      'content','news not found'
    );

    await page.goto('/detail?author=Emily Flitter')
    await expect(page).toHaveTitle(/Detail — News/)
    const metadescriptionexist = await page.locator('meta[name="description"]');
    await expect(metadescriptionexist).toHaveAttribute(
      'content','news detail content'
    );
    
  })
})

