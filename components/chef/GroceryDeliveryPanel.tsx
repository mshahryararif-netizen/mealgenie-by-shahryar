'use client';

import { useMemo, useState } from 'react';
import chef from '@/components/chef/chef.module.css';
import styles from '@/components/chef/features.module.css';
import {
  deliveryProviders,
  getDeliveryProvider,
  type DeliveryProviderId,
} from '@/lib/chef/delivery-providers';
import { loadGrocery } from '@/lib/chef/features-store';

type Props = { onBack: () => void };

export function GroceryDeliveryPanel({ onBack }: Props) {
  const items = useMemo(() => loadGrocery().filter((i) => !i.checked), []);
  const [provider, setProvider] = useState<DeliveryProviderId>('instacart');
  const [step, setStep] = useState<'review' | 'checkout' | 'done'>('review');
  const [cartId, setCartId] = useState('');
  const [busy, setBusy] = useState(false);

  async function buyAll() {
    setBusy(true);
    try {
      const api = getDeliveryProvider(provider);
      const cart = await api.createCart(
        items.map((item) => ({
          name: item.name,
          quantity: item.quantity,
          unit: item.unit,
        })),
      );
      setCartId(cart.cartId);
      setStep('checkout');
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className={chef.panel}>
      <div className={chef.panelHeader}>
        <div>
          <h2>Grocery Delivery</h2>
          <p>Provider abstraction ready for Instacart / Walmart / Amazon Fresh.</p>
        </div>
        <button type="button" className={chef.ghostBtn} onClick={onBack}>
          Back
        </button>
      </div>

      <div className={styles.tools}>
        {deliveryProviders.map((p) => (
          <button
            key={p.id}
            type="button"
            className={chef.chip}
            data-active={provider === p.id}
            onClick={() => setProvider(p.id)}
          >
            {p.label}
          </button>
        ))}
      </div>

      {step === 'review' && (
        <div className={styles.card}>
          <h3>Missing items ({items.length})</h3>
          {items.length === 0 ? (
            <p className={styles.muted}>No unchecked grocery items. Build a list first.</p>
          ) : (
            <div className={styles.list}>
              {items.map((item) => (
                <div key={item.id} className={styles.meta}>
                  {item.quantity} {item.unit} {item.name}
                </div>
              ))}
            </div>
          )}
          <div className={styles.tools} style={{ marginTop: 12 }}>
            <button
              type="button"
              className={chef.primaryBtn}
              disabled={items.length === 0 || busy}
              onClick={() => void buyAll()}
            >
              {busy ? 'Creating cart…' : `Buy All via ${getDeliveryProvider(provider).label}`}
            </button>
          </div>
        </div>
      )}

      {step === 'checkout' && (
        <div className={styles.card}>
          <h3>Mock checkout</h3>
          <p className={styles.muted}>
            Cart <code>{cartId}</code> created through the provider layer. Swap mocks for real
            SDKs in <code>lib/chef/delivery-providers.ts</code>.
          </p>
          <button type="button" className={chef.primaryBtn} onClick={() => setStep('done')}>
            Confirm mock order
          </button>
        </div>
      )}

      {step === 'done' && (
        <div className={styles.card}>
          <h3>Order placed (mock)</h3>
          <p className={styles.muted}>
            {items.length} items queued for {provider}. No real charge was made.
          </p>
          <button type="button" className={chef.ghostBtn} onClick={() => setStep('review')}>
            Back to review
          </button>
        </div>
      )}
    </section>
  );
}
