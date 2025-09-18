-- Create registrations table
CREATE TABLE public.registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  college TEXT NOT NULL,
  roll_number TEXT NOT NULL,
  section TEXT NOT NULL,
  selected_events JSONB NOT NULL DEFAULT '[]'::jsonb,
  total_amount DECIMAL(10,2) NOT NULL DEFAULT 0,
  registration_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (for future if needed)
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public access for now (admin functionality)
CREATE POLICY "Allow public access for registrations" 
ON public.registrations 
FOR ALL 
USING (true);

-- Create index for better performance on queries
CREATE INDEX idx_registrations_email ON public.registrations(email);
CREATE INDEX idx_registrations_registration_date ON public.registrations(registration_date);
CREATE INDEX idx_registrations_selected_events ON public.registrations USING GIN(selected_events);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_registrations_updated_at
BEFORE UPDATE ON public.registrations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();