import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import { formatDate } from '../../../utils/formatDate';
import { ProductImage, SelectStatus } from './styles'
import { orderStatusOptions } from './orderStatus';
import { api } from '../../../services/api';

export function Row({ row, setOrders, orders }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false)

  const currentStatus =
    orderStatusOptions.find(
      (option) => option.value === row.status
    ) ?? null;

  async function newStatusOrder(id, status) {

    try {
      setLoading(true);
      await api.put(`/orders/${id}`, { status });

      const newOrders = orders.map((order) => order.id === id ? { ...order, status } : order
      );

      setOrders(newOrders);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <TableRow sx={{ '& > .MuiTableCell-root': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.orderId}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{formatDate(row.date)}</TableCell>
        <TableCell>
          <SelectStatus
            options={orderStatusOptions.filter((option) => option.id !== 0)}
            value={currentStatus}
            getOptionLabel={(option) => option.label}
            getOptionValue={(option) => String(option.id)}
            placeholder="status"
            onChange={(option) => {
              if (option) {
                newStatusOrder(row.orderId, option.value);
              }
            }}
            isLoading={loading}
            menuPortalTarget={document.body}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Pedido
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Quantidade</TableCell>
                    <TableCell>Produto</TableCell>
                    <TableCell>Categoria</TableCell>
                    <TableCell>Imagem do Produto</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell component="th" scope="row">
                        {product.id}
                      </TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>
                        <ProductImage src={product.url} alt={product.name} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  orders: PropTypes.array.isRequired,
  setOrders: PropTypes.func.isRequired,
  row: PropTypes.shape({
    orderId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ).isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};