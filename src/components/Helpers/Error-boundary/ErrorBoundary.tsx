import { Component, ErrorInfo } from "react";
import { Navigate } from "react-router-dom";
import { Box, Button, Text } from "@chakra-ui/react";
import { styles } from "./styles";
import { ErrorBoundaryProps, ErrorBoundaryState } from "./types";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, redirect: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true, redirect: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to='/' replace={true} />;
    }

    if (this.state.hasError) {
      return (
        <Box sx={styles.BoxWrapper}>
          <Text fontSize='xl'>Something went wrong</Text>
          <Button onClick={() => this.setState({ redirect: true })}>Go home</Button>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
