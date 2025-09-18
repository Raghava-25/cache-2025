import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Download, Users, DollarSign, Calendar, FileText } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

interface Registration {
  id: string;
  name: string;
  email: string;
  phone: string;
  college: string;
  roll_number: string;
  section: string;
  selected_events: Array<{id: string, name: string, price: number}>;
  total_amount: number;
  registration_date: string;
}

interface EventStats {
  eventName: string;
  participantCount: number;
  revenue: number;
}

const Admin = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [eventStats, setEventStats] = useState<EventStats[]>([]);
  const { toast } = useToast();

  const fetchRegistrations = async () => {
    try {
      const { data, error } = await supabase
        .from('registrations')
        .select('*')
        .order('registration_date', { ascending: false });

      if (error) throw error;

      const typedData = (data || []).map(item => ({
        ...item,
        selected_events: item.selected_events as Array<{id: string, name: string, price: number}>
      }));
      setRegistrations(typedData);
      calculateEventStats(typedData);
    } catch (error) {
      console.error('Error fetching registrations:', error);
      toast({
        title: "Error",
        description: "Failed to fetch registration data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const calculateEventStats = (data: Registration[]) => {
    const eventMap = new Map<string, { count: number; revenue: number }>();

    data.forEach(registration => {
      registration.selected_events.forEach(event => {
        const existing = eventMap.get(event.name) || { count: 0, revenue: 0 };
        eventMap.set(event.name, {
          count: existing.count + 1,
          revenue: existing.revenue + event.price
        });
      });
    });

    const stats = Array.from(eventMap.entries()).map(([name, data]) => ({
      eventName: name,
      participantCount: data.count,
      revenue: data.revenue
    }));

    setEventStats(stats);
  };

  const exportToCSV = () => {
    const headers = [
      'Name', 'Email', 'Phone', 'College', 'Roll Number', 'Section', 
      'Events', 'Total Amount', 'Registration Date'
    ];

    const csvData = registrations.map(reg => [
      reg.name,
      reg.email,
      reg.phone,
      reg.college,
      reg.roll_number,
      reg.section,
      reg.selected_events.map(e => e.name).join('; '),
      reg.total_amount,
      new Date(reg.registration_date).toLocaleDateString()
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `registrations_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Success",
      description: "Registration data exported successfully",
    });
  };

  const exportEventCSV = (eventName: string) => {
    const eventRegistrations = registrations.filter(reg => 
      reg.selected_events.some(event => event.name === eventName)
    );

    const headers = ['Name', 'Email', 'Phone', 'College', 'Roll Number', 'Section', 'Registration Date'];
    const csvData = eventRegistrations.map(reg => [
      reg.name,
      reg.email,
      reg.phone,
      reg.college,
      reg.roll_number,
      reg.section,
      new Date(reg.registration_date).toLocaleDateString()
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${eventName.replace(/\s+/g, '_')}_participants.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const totalRevenue = registrations.reduce((sum, reg) => sum + reg.total_amount, 0);
  const totalParticipants = registrations.length;
  const technicalEvents = eventStats.filter(stat => 
    ['Code Hunt', 'Tech Quiz', 'Web Development', 'Mobile App Development', 'AI/ML Workshop'].includes(stat.eventName)
  );
  const nonTechnicalEvents = eventStats.filter(stat => 
    ['Cultural Dance', 'Singing Competition', 'Art Exhibition', 'Photography Contest', 'Creative Writing'].includes(stat.eventName)
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading admin data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground text-center">Manage registrations and track revenue</p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalParticipants}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{totalRevenue}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Events</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{eventStats.length}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="technical">Technical Events</TabsTrigger>
            <TabsTrigger value="non-technical">Non-Technical Events</TabsTrigger>
            <TabsTrigger value="participants">All Participants</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Event Statistics</h2>
              <Button onClick={exportToCSV} className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Export All Data
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {eventStats.map((stat) => (
                <Card key={stat.eventName}>
                  <CardHeader>
                    <CardTitle className="text-lg">{stat.eventName}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Participants:</span>
                      <Badge variant="secondary">{stat.participantCount}</Badge>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-muted-foreground">Revenue:</span>
                      <span className="font-bold">₹{stat.revenue}</span>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => exportEventCSV(stat.eventName)}
                      className="w-full"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Export Participants
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="technical" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Technical Events</h2>
              <div className="text-sm text-muted-foreground">
                Total Revenue: ₹{technicalEvents.reduce((sum, event) => sum + event.revenue, 0)}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {technicalEvents.map((stat) => (
                <Card key={stat.eventName}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">{stat.eventName}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Participants:</span>
                        <Badge>{stat.participantCount}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Revenue:</span>
                        <span className="font-bold">₹{stat.revenue}</span>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => exportEventCSV(stat.eventName)}
                        className="w-full mt-2"
                      >
                        Export
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="non-technical" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Non-Technical Events</h2>
              <div className="text-sm text-muted-foreground">
                Total Revenue: ₹{nonTechnicalEvents.reduce((sum, event) => sum + event.revenue, 0)}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {nonTechnicalEvents.map((stat) => (
                <Card key={stat.eventName}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">{stat.eventName}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Participants:</span>
                        <Badge>{stat.participantCount}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Revenue:</span>
                        <span className="font-bold">₹{stat.revenue}</span>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => exportEventCSV(stat.eventName)}
                        className="w-full mt-2"
                      >
                        Export
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="participants" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">All Participants</h2>
              <Button onClick={exportToCSV} className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Export All
              </Button>
            </div>
            
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>College</TableHead>
                      <TableHead>Events</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {registrations.map((registration) => (
                      <TableRow key={registration.id}>
                        <TableCell className="font-medium">{registration.name}</TableCell>
                        <TableCell>{registration.email}</TableCell>
                        <TableCell>{registration.college}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {registration.selected_events.map((event, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {event.name}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>₹{registration.total_amount}</TableCell>
                        <TableCell>
                          {new Date(registration.registration_date).toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;