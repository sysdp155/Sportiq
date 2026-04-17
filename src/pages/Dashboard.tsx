import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { BarChart3, Users, TrendingUp, Activity, Clock, Target, ArrowUp, ArrowDown } from "lucide-react";

const kpis = [
  { label: "Active Athletes", value: "2,847", change: "+12.3%", up: true, icon: Users },
  { label: "Sessions Tracked", value: "14,582", change: "+8.7%", up: true, icon: Activity },
  { label: "Avg Performance Score", value: "87.4", change: "+2.1%", up: true, icon: TrendingUp },
  { label: "Injury Rate", value: "3.2%", change: "-1.4%", up: false, icon: Target },
];

const recentActivity = [
  { time: "2m ago", event: "Player GPS data synced — FC Barcelona U21", type: "data" },
  { time: "15m ago", event: "Match report generated — League Round 24", type: "report" },
  { time: "1h ago", event: "New team onboarded — Tokyo Verdy", type: "team" },
  { time: "2h ago", event: "Injury risk alert — 3 players flagged", type: "alert" },
  { time: "3h ago", event: "Weekly analytics digest sent to 48 coaches", type: "report" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
};

export default function Dashboard() {
  return (
    <Layout>
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground text-sm mt-1">Welcome back. Here's what's happening across your platform.</p>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {kpis.map((k, i) => (
              <motion.div
                key={k.label}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="p-5 rounded-lg border bg-card"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground font-medium">{k.label}</span>
                  <div className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center">
                    <k.icon className="h-4 w-4 text-accent" />
                  </div>
                </div>
                <div className="font-heading text-2xl font-bold text-card-foreground">{k.value}</div>
                <div className={`flex items-center gap-1 mt-1 text-xs font-medium ${k.up ? "text-accent" : "text-destructive"}`}>
                  {k.up ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                  {k.change} vs last month
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Chart placeholder */}
            <div className="lg:col-span-2 rounded-lg border bg-card p-6">
              <h3 className="font-heading font-semibold text-card-foreground mb-4">Performance Trend</h3>
              <div className="h-64 rounded-md bg-muted/50 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-10 w-10 text-muted-foreground/40 mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">Chart visualization</span>
                  <p className="text-xs text-muted-foreground/60 mt-1">Connect data source to populate</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-heading font-semibold text-card-foreground mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((a, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="flex gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-card-foreground leading-snug">{a.event}</p>
                      <span className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                        <Clock className="h-3 w-3" />{a.time}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
