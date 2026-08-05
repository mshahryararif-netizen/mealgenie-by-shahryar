/**
 * Grocery delivery provider abstraction.
 * Swap mock providers for real Instacart/Walmart/Amazon Fresh SDKs later.
 */
export type DeliveryProviderId = 'instacart' | 'walmart' | 'amazon' | 'local';

export type DeliveryCartItem = {
  name: string;
  quantity: number;
  unit: string;
};

export type DeliveryProvider = {
  id: DeliveryProviderId;
  label: string;
  createCart: (items: DeliveryCartItem[]) => Promise<{ cartId: string; checkoutUrl?: string }>;
};

async function mockCreateCart(id: DeliveryProviderId, items: DeliveryCartItem[]) {
  await new Promise((r) => setTimeout(r, 400));
  return {
    cartId: `${id}_${Date.now()}`,
    checkoutUrl: undefined as string | undefined,
    itemCount: items.length,
  };
}

export const deliveryProviders: DeliveryProvider[] = [
  {
    id: 'instacart',
    label: 'Instacart',
    createCart: (items) => mockCreateCart('instacart', items),
  },
  {
    id: 'walmart',
    label: 'Walmart',
    createCart: (items) => mockCreateCart('walmart', items),
  },
  {
    id: 'amazon',
    label: 'Amazon Fresh',
    createCart: (items) => mockCreateCart('amazon', items),
  },
  {
    id: 'local',
    label: 'Local grocery API',
    createCart: (items) => mockCreateCart('local', items),
  },
];

export function getDeliveryProvider(id: DeliveryProviderId) {
  return deliveryProviders.find((p) => p.id === id) || deliveryProviders[0];
}
