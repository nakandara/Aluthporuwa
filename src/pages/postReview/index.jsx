import { useState, useEffect, useCallback } from 'react';
import axios from "axios";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LayoutSecond from "../../../components/LayoutSecond/LayoutSecond";
import { environments } from "../../../components/environment/environments";
import { useRouter } from "next/router";
import { useToken } from "../../context/TokenContext";
import TextField from '@mui/material/TextField';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${theme.breakpoints.down('md')}`]: {
    display: 'none',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function AdminPostReview() {
  const { user } = useToken();
  const router = useRouter();
  const [filterId, setFilterId] = useState('');
  const [filterTitle, setFilterTitle] = useState('');
  const [data, setData] = useState([]);

  const fetchPosts = useCallback(async () => {
    try {
      if (!user) return;
      const response = await axios.get(
        `${environments.BASE_HOST_URL}/api/getAllPosts`
      );

      console.log(response, '333333333333');
      setData(response.data.data); // Extract the array from the response
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }, [user]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const filteredRows = data.filter(post => {
    return post.postId.includes(filterId) && (post.title || '').toLowerCase().includes(filterTitle.toLowerCase());
  });

  const PostClick = (postId) => {
    router.push(`/postReview/${postId}`);
  };

  return (
    <LayoutSecond>
      <TableContainer component={Paper} sx={{ marginTop: "20vh" }}>
        <TextField
          label="Filter by ID"
          value={filterId}
          onChange={(e) => setFilterId(e.target.value)}
          sx={{ margin: '0 10px', marginBottom: '20px' }}
        />
        <TextField
          label="Filter by Title"
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
          sx={{ margin: '0 10px', marginBottom: '20px' }}
        />
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Post ID</StyledTableCell>
              <StyledTableCell align="right">Title</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <StyledTableRow key={row.postId} onClick={() => PostClick(row.postId)}>
                <StyledTableCell component="th" scope="row">
                  {row.postId}
                </StyledTableCell>
                <StyledTableCell align="right">{row.title}</StyledTableCell>
                <StyledTableCell align="right">{row.verify ? "true" : "false"}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </LayoutSecond>
  );
}
