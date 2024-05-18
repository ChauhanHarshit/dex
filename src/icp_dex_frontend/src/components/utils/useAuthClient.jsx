import { AuthClient } from "@dfinity/auth-client";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
    createActor as createActorBackend,
    idlFactory
} from '../../../../declarations/icp_dex_backend/index';
import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory as TokenIdl } from "../../../../icp_dex_backend/ledger.did";



const AuthContext = createContext();

const defaultOptions = {
    /**
     *  @type {import("@dfinity/auth-client").AuthClientCreateOptions}
     */
    createOptions: {
        // idleOptions: {
        //   // Set to true if you do not want idle functionality
        //   disableIdle: true,
        // },
        idleOptions: {
            idleTimeout: 1000 * 60 * 30, // set to 30 minutes
            disableDefaultIdleCallback: true, // disable the default reload behavior
        },
    },
    /**
     * @type {import("@dfinity/auth-client").AuthClientLoginOptions}
     */
    loginOptionsIcp: {
        identityProvider:
            process.env.DFX_NETWORK === "ic"
                ? "https://identity.ic0.app/#authorize"
                : `http://bw4dl-smaaa-aaaaa-qaacq-cai.localhost:4943/`,
    },
    loginOptionsnfid: {
        identityProvider:
            process.env.DFX_NETWORK === "ic"
                ? `https://nfid.one/authenticate/?applicationName=my-ic-app#authorize`
                : `https://nfid.one/authenticate/?applicationName=my-ic-app#authorize`
    },
};

/**
 *
 * @param options - Options for the AuthClient
 * @param {AuthClientCreateOptions} options.createOptions - Options for the AuthClient.create() method
 * @param {AuthClientLoginOptions} options.loginOptions - Options for the AuthClient.login() method
 * @returns
 */
export const useAuthClient = (options = defaultOptions) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authClient, setAuthClient] = useState(null);
    const [identity, setIdentity] = useState(null);
    const [principal, setPrincipal] = useState(null);


    useEffect(() => {
        // Initialize AuthClient
        AuthClient.create(options.createOptions).then((client) => {
            setAuthClient(client);
        });
    }, []);

    const login = (val) => {
        return new Promise(async (resolve, reject) => {
            try {
                if (authClient.isAuthenticated() && ((await authClient.getIdentity().getPrincipal().isAnonymous()) === false)) {
                    updateClient(authClient);
                    resolve(AuthClient);
                } else {
                    let opt = val === "Icp" ? "loginOptionsIcp" : "loginOptionsnfid"
                    authClient.login({
                        ...options[opt],
                        onError: (error) => reject(error),
                        onSuccess: () => {
                            updateClient(authClient);
                            resolve(authClient);
                        },
                    });
                }
            } catch (error) {
                reject(error);
            }
        })
    };

    const createTokenActor = (canisterId) => {
        let identity = window.identity;
        const agent = new HttpAgent({ identity });
        let tokenActor = Actor.createActor(TokenIdl, {
            agent,
            canisterId,
        });
        return tokenActor;
    };

    const reloadLogin = () => {
        return new Promise(async (resolve, reject) => {
            try {
                if (authClient.isAuthenticated() && ((await authClient.getIdentity().getPrincipal().isAnonymous()) === false)) {
                    updateClient(authClient);
                    resolve(AuthClient);
                }
            } catch (error) {
                reject(error);
            }
        })
    };

    async function updateClient(client) {
        const isAuthenticated = await client.isAuthenticated();
        setIsAuthenticated(isAuthenticated);
        const identity = client.getIdentity();
        setIdentity(identity);
        const principal = identity.getPrincipal();
        setPrincipal(principal);
        setAuthClient(client);
        // console.log(identity);
    }

    const createLedgerActor = (canisterId) => {
        let identity = window.identity;
        const agent = new HttpAgent({ identity });
        // Creates an actor with using the candid interface and the HttpAgent
        return Actor.createActor(idlFactory, {
            agent,
            canisterId,
        });
    };

    async function logout() {
        await authClient?.logout();
        await updateClient(authClient);
        setIsAuthenticated(false);
    }



    const canisterId =
        process.env.CANISTER_ID_ICP_DEX_BACKEND ||
        process.env.CANISTER_ID_icp_dex_backend;

    const actor = createActorBackend(canisterId, { agentOptions: { identity } });




    return {
        isAuthenticated,
        login,
        logout,
        updateClient,
        authClient,
        identity,
        principal,
        createLedgerActor,
        actor,
        reloadLogin,
        createTokenActor
    };
};

/**
 * @type {React.FC}
 */
export const AuthProvider = ({ children }) => {
    const auth = useAuthClient();
    if (auth.authClient && auth.actor) {
        return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;

    }

};

export const useAuth = () => useContext(AuthContext);