-- ═══════════════════════════════════════════
-- DIELLI X — Supabase Database Schema
-- Run this in your Supabase SQL Editor:
-- https://nmontinovgrxfohdecrh.supabase.co
-- ═══════════════════════════════════════════

-- 1. Court Reservations
CREATE TABLE IF NOT EXISTS reservations (
  id BIGSERIAL PRIMARY KEY,
  court TEXT NOT NULL,
  hours INT NOT NULL CHECK (hours IN (1, 2)),
  date DATE NOT NULL,
  time TIME NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  total_euros INT NOT NULL CHECK (total_euros IN (5, 10)),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Merch Orders
CREATE TABLE IF NOT EXISTS orders (
  id BIGSERIAL PRIMARY KEY,
  items JSONB NOT NULL,
  total_euros NUMERIC(10,2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Tournament Registrations
CREATE TABLE IF NOT EXISTS tournament_registrations (
  id BIGSERIAL PRIMARY KEY,
  tournament TEXT NOT NULL,
  category TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  skill_level TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE tournament_registrations ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (anyone can book/order/register)
CREATE POLICY "Allow public inserts on reservations"
  ON reservations FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public inserts on orders"
  ON orders FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public inserts on tournament_registrations"
  ON tournament_registrations FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow reading own data (optional — not strictly needed for the site)
CREATE POLICY "Allow public select on reservations"
  ON reservations FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public select on orders"
  ON orders FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public select on tournament_registrations"
  ON tournament_registrations FOR SELECT
  TO anon
  USING (true);
