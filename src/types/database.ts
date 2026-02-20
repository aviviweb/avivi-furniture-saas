export type Organization = {
  id: string;
  name: string;
  slug: string;
  logo_url?: string;
  settings: any;
  created_at: string;
};

export type Profile = {
  id: string;
  organization_id: string;
  full_name: string;
  role: 'admin' | 'staff' | 'driver' | 'assembler';
  phone?: string;
  updated_at: string;
};

export type Product = {
  id: string;
  organization_id: string;
  name: string;
  description?: string;
  sku?: string;
  price: number;
  image_url?: string;
  created_at: string;
};

export type Delivery = {
  id: string;
  organization_id: string;
  customer_name: string;
  customer_address: string;
  customer_phone?: string;
  status: 'pending' | 'scheduled' | 'in_transit' | 'delivered' | 'cancelled';
  driver_id?: string;
  scheduled_at?: string;
  delivery_notes?: string;
  ai_priority_score: number;
  created_at: string;
};

export type Task = {
  id: string;
  delivery_id: string;
  organization_id: string;
  title: string;
  task_type: 'delivery' | 'assembly' | 'pickup';
  status: 'pending' | 'in_progress' | 'completed';
  assembler_id?: string;
  notes?: string;
  created_at: string;
};
