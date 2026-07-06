import { useEffect } from "react";
import useOrders from "@/hooks/useOrders";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const STATUS_OPTIONS = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"];

const getStatusColor = (status) => {
  if (status === "Delivered") return "bg-green-100 text-green-700";
  if (status === "Pending") return "bg-yellow-100 text-yellow-700";
  if (status === "Cancelled") return "bg-red-100 text-red-700";
  if (status === "Shipped") return "bg-blue-100 text-blue-700";
  if (status === "Processing") return "bg-purple-100 text-purple-700";
  return "bg-gray-100 text-gray-600";
};

function AdminOrders() {
  const { orders, loading, fetchAllOrders, handleUpdateStatus } = useOrders();

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">{orders.length} total orders</p>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Products</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-gray-400">
                  Loading orders...
                </TableCell>
              </TableRow>
            ) : orders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-gray-400">
                  No orders yet.
                </TableCell>
              </TableRow>
            ) : (
              orders.map((order) => (
                <TableRow key={order._id}>
                  <TableCell className="font-mono text-xs text-gray-500">
                    #{order._id.slice(-6).toUpperCase()}
                  </TableCell>
                  <TableCell>
                    <p className="font-medium text-sm">{order.user?.name || "N/A"}</p>
                    <p className="text-xs text-gray-400">{order.user?.email}</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      {order.products.map((p, i) => (
                        <p key={i} className="text-xs text-gray-600">
                          {p.name} — Rs.{p.price}
                        </p>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="font-bold text-blue-600">
                    Rs. {order.totalAmount}
                  </TableCell>
                  <TableCell className="text-xs text-gray-500">
                    <p>{order.shippingAddress?.city}</p>
                    <p>{order.shippingAddress?.phone}</p>
                  </TableCell>
                  <TableCell className="text-xs text-gray-400">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Select
                      value={order.status}
                      onValueChange={(val) => handleUpdateStatus(order._id, val)}
                    >
                      <SelectTrigger className={`w-32 h-8 text-xs font-medium border-0 ${getStatusColor(order.status)}`}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {STATUS_OPTIONS.map((s) => (
                          <SelectItem key={s} value={s} className="text-xs">
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default AdminOrders;