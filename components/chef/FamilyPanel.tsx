'use client';

import { FormEvent, useState } from 'react';
import chef from '@/components/chef/chef.module.css';
import styles from '@/components/chef/features.module.css';
import { ALLERGY_OPTIONS, CUISINE_OPTIONS, GOAL_OPTIONS, SKILL_OPTIONS } from '@/lib/chef/options';
import {
  loadFamily,
  saveFamily,
  uid,
  type FamilyProfile,
  type FamilyState,
} from '@/lib/chef/features-store';
import type { Allergy, CuisineChoice, Goal, SkillLevel } from '@/lib/chef/types';

type Props = { onBack: () => void };

export function FamilyPanel({ onBack }: Props) {
  const [family, setFamily] = useState<FamilyState>(() => loadFamily());
  const [name, setName] = useState('');
  const [age, setAge] = useState('10');
  const [role, setRole] = useState<'parent' | 'child'>('child');

  const active = family.profiles.find((p) => p.id === family.activeProfileId) || family.profiles[0];

  function persist(next: FamilyState) {
    setFamily(saveFamily(next));
  }

  function addProfile(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    const profile: FamilyProfile = {
      id: uid('profile'),
      name: name.trim(),
      age: Number(age) || 1,
      role,
      allergies: [],
      favoriteCuisines: ['surprise'],
      goals: ['balanced'],
      skill: 'beginner',
    };
    persist({
      ...family,
      profiles: [...family.profiles, profile],
      activeProfileId: profile.id,
    });
    setName('');
  }

  function patchActive(patch: Partial<FamilyProfile>) {
    persist({
      ...family,
      profiles: family.profiles.map((p) => (p.id === active.id ? { ...p, ...patch } : p)),
    });
  }

  return (
    <section className={chef.panel}>
      <div className={chef.panelHeader}>
        <div>
          <h2>Family Profiles</h2>
          <p>Switch profiles. Shared pantry, planner, and grocery stay in sync on this device.</p>
        </div>
        <button type="button" className={chef.ghostBtn} onClick={onBack}>
          Back
        </button>
      </div>

      <div className={styles.profileGrid}>
        {family.profiles.map((profile) => (
          <button
            key={profile.id}
            type="button"
            className={styles.profile}
            data-active={profile.id === family.activeProfileId}
            onClick={() => persist({ ...family, activeProfileId: profile.id })}
          >
            <strong>{profile.name}</strong>
            <div className={styles.meta}>
              {profile.role} · age {profile.age}
            </div>
          </button>
        ))}
      </div>

      <form className={styles.tools} onSubmit={addProfile}>
        <input
          className={chef.field}
          style={{ maxWidth: 160 }}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={chef.field}
          style={{ maxWidth: 90 }}
          type="number"
          min={1}
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <select
          className={chef.field}
          style={{ maxWidth: 120 }}
          value={role}
          onChange={(e) => setRole(e.target.value as 'parent' | 'child')}
        >
          <option value="parent">Parent</option>
          <option value="child">Child</option>
        </select>
        <button type="submit" className={chef.primaryBtn}>
          Add profile
        </button>
      </form>

      {active && (
        <div className={styles.card}>
          <h3>Editing {active.name}</h3>
          <p className={styles.muted}>Future-ready for Clerk account linking.</p>
          <div className={styles.tools}>
            {ALLERGY_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={chef.chip}
                data-active={active.allergies.includes(opt.id)}
                onClick={() => {
                  const allergies = active.allergies.includes(opt.id)
                    ? active.allergies.filter((a) => a !== opt.id)
                    : [...active.allergies, opt.id as Allergy];
                  patchActive({ allergies });
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className={styles.tools} style={{ marginTop: 10 }}>
            {CUISINE_OPTIONS.slice(0, 6).map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={chef.chip}
                data-active={active.favoriteCuisines.includes(opt.id)}
                onClick={() => patchActive({ favoriteCuisines: [opt.id as CuisineChoice] })}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className={styles.tools} style={{ marginTop: 10 }}>
            {GOAL_OPTIONS.slice(0, 5).map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={chef.chip}
                data-active={active.goals.includes(opt.id)}
                onClick={() => patchActive({ goals: [opt.id as Goal] })}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className={styles.tools} style={{ marginTop: 10 }}>
            {SKILL_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={chef.chip}
                data-active={active.skill === opt.id}
                onClick={() => patchActive({ skill: opt.id as SkillLevel })}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
